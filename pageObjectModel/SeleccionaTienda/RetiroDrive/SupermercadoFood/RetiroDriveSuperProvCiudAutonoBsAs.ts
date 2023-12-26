import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../config/configLoader'

export class RetiroDriveSuperProvCiudAutonoBsAs extends BasePage {

    readonly CIUDAD_AUTONOMA_BUENOS_AIRES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CIUDAD_AUTONOMA_BUENOS_AIRES = this.page.locator("//div[contains(text(),'Ciudad Autónoma de Buenos Aires')]")
    }

    async clickCiudadAutonomaBuenosAires(): Promise<void> {
        await this.click(this.CIUDAD_AUTONOMA_BUENOS_AIRES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToTiendaRetiroDriveSuperProvCiudAutonoBsAs(): Promise<void> {
        await this.clickCiudadAutonomaBuenosAires()
    }
}
