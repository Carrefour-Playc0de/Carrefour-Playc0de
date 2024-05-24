import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class RetiroDriveSuperProv extends BasePage {

    readonly SUPERMERCADO_FOOD: Locator
    readonly PROVINCIA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SUPERMERCADO_FOOD = this.page.locator('//p[normalize-space()="Supermercado"]')
        this.PROVINCIA = this.page.locator("//div[@class='css-b0wje']")
    }

    async clickSupermercadoFood(): Promise<void> {
        await this.click(this.SUPERMERCADO_FOOD)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(1000)
    }
    async clickProvincia(): Promise<void> {
        await this.click(this.PROVINCIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToTiendaRetiroDriveSuperProv(): Promise<void> {
        await this.clickSupermercadoFood()
        await this.clickProvincia()
    }
}
