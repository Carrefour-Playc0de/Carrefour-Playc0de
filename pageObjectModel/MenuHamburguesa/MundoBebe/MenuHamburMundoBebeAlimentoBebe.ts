import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeAlimentoBebe extends BasePage {

    readonly ALIMENTO_BEBE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ALIMENTO_BEBE = this.page.locator('//a [@id="menu-item-category-alimento-bebe"]')
    }

    async clickMundoBebeAlimentoBebe(): Promise<void> {
        await this.click(this.ALIMENTO_BEBE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeAlimentoBebe(): Promise<void> {
        await this.clickMundoBebeAlimentoBebe()
    }
}
